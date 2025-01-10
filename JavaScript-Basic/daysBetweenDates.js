function daysBetweenDates(date1, date2) {
    const diffTime = Math.abs(new Date(date2) - new Date(date1));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

console.log(daysBetweenDates("2025-01-01", "2025-01-10"));
