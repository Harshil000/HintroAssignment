/**
 * Format seconds into compact time parts.
 * @param {number} seconds
 * @returns {string} "0s" for 0/falsy, otherwise a compact string like "37m 12s" or "1h 5m"
 */
export const formatSecondsToTime = (seconds) => {
    if (!seconds || seconds === 0) return '0s'

    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    const parts = []
    if (hours > 0) parts.push(`${hours}h`)
    if (minutes > 0) parts.push(`${minutes}m`)
    if (secs > 0) parts.push(`${secs}s`)

    return parts.join(' ')
}

/**
 * Format date as relative day text.
 * @param {string|number|Date|object} date Date-like input handled by _coerceToDate
 * @returns {string} "-" for invalid input, otherwise "today", "N days ago", or "in N days"
 */
export const formatDate = (date) => {
    if (!date) return '-'

    const dateObj = _coerceToDate(date)
    if (!dateObj) return '-'

    const today = new Date()
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    const startOfDate = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate())
    const diffMs = startOfToday - startOfDate
    const days = Math.round(diffMs / (1000 * 60 * 60 * 24))

    if (days === 0) return 'today'
    if (days === 1) return '1 day ago'
    if (days > 1) return `${days} days ago`

    const abs = Math.abs(days)
    if (abs === 1) return 'in 1 day'
    return `in ${abs} days`
}

/**
 * Format date and time using en-US locale.
 * @param {string|Date} date
 * @returns {string} "-" for falsy input, otherwise locale datetime (for example "May 9, 2026, 02:15 PM")
 */
export const formatDateTime = (date) => {
    if (!date) return '-'

    const dateObj = typeof date === 'string' ? new Date(date) : date
    return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}

const _coerceToDate = (input) => {
    if (!input) return null
    if (input instanceof Date) return input

    if (typeof input === 'string' || typeof input === 'number') {
        const d = new Date(input)
        return isNaN(d.getTime()) ? null : d
    }

    if (typeof input.toDate === 'function') {
        try {
            const d = input.toDate()
            return d instanceof Date && !isNaN(d.getTime()) ? d : null
        } catch (e) {
            return null
        }
    }

    if (input && (input.seconds !== undefined || input._seconds !== undefined)) {
        const seconds = Number(input.seconds ?? input._seconds) || 0
        const nanoseconds = Number(input.nanoseconds ?? input._nanoseconds ?? 0) || 0
        return new Date(seconds * 1000 + Math.floor(nanoseconds / 1e6))
    }

    return null
}

/**
 * Build initials from first and last name.
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string} Uppercase initials like "JD"; missing parts are omitted
 */
export const getInitials = (firstName, lastName) => {
    const f = firstName?.charAt(0) || ''
    const l = lastName?.charAt(0) || ''
    return (f + l).toUpperCase()
}

/**
 * Format date as month + day with ordinal suffix.
 * @param {string|number|Date|object} date Date-like input handled by _coerceToDate
 * @returns {string} "-" for invalid input, otherwise value like "April 29th"
 */
export const formatDateHeader = (date) => {
    if (!date) return '-'

    const dateObj = _coerceToDate(date)
    if (!dateObj) return '-'

    const day = dateObj.getDate()
    const suffix = (n) => {
        if (n % 10 === 1 && n % 100 !== 11) return 'st'
        if (n % 10 === 2 && n % 100 !== 12) return 'nd'
        if (n % 10 === 3 && n % 100 !== 13) return 'rd'
        return 'th'
    }
    const month = dateObj.toLocaleString('en-US', { month: 'long' })
    return `${month} ${day}${suffix(day)}`
}