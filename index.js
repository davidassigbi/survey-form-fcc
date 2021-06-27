const data = ["Front-end Projects", "Back-end Projects", "Data Visualization", "Challenges", "Open Source Community", "Gitter help rooms", "Videos", "City Meetups", "Wiki", "Forum", "Additional Courses"]
const div = document.getElementById("checkboxes")
data.forEach(d => {
    div.innerHTML += `
    <label>
        <input type="checkbox" value="${d.toLowerCase()}" name="country" id="${d.toLowerCase().trim().replace(" ", "")}-checkbox" />
        ${d}
    </label>
    `
})