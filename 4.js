const jobs = [
    {
        "company": "Photosnap",
        "position": "Senior Frontend Developer",
        "type": "Full Time",
        "location": "USA Only",
        "skills": ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
        "img": "https://raw.githubusercontent.com/Priya44-bit/Job-Developer/682b1ba80230855146fe637a7a167bf2ce1b6abc/back5.svg"
    },
    {
        "company": "Manage",
        "position": "Fullstack Developer",
        "type": "Part Time",
        "location": "Remote",
        "skills": ["Fullstack", "Midnight", "Python", "React"],
        "img": "https://raw.githubusercontent.com/Priya44-bit/Job-Developer/682b1ba80230855146fe637a7a167bf2ce1b6abc/back6.svg"
    },
    {
        "company": "Account",
        "position": "Junior Frontend Developer",
        "type": "Part Time",
        "location": "USA Only",
        "skills": ["Frontend", "Junior", "JavaScript", "React", "Sass"],
        "img": "https://raw.githubusercontent.com/Priya44-bit/Job-Developer/682b1ba80230855146fe637a7a167bf2ce1b6abc/back7.svg"
    },
    {
        "company": "MyHome",
        "position": "Junior Frontend Developer",
        "type": "Contract",
        "location": "USA Only",
        "skills": ["Frontend", "Junior", "CSS", "JavaScript"],
        "img": "https://raw.githubusercontent.com/Priya44-bit/Job-Developer/682b1ba80230855146fe637a7a167bf2ce1b6abc/back8.svg"
    },
    {
        "company": "Loop Studios",
        "position": "Software Engineer",
        "type": "Full Time",
        "location": "Worldwide",
        "skills": ["Fullstack", "Midnight", "JavaScript", "Ruby", "Sass"],
        "img": "https://raw.githubusercontent.com/Priya44-bit/Job-Developer/682b1ba80230855146fe637a7a167bf2ce1b6abc/back9.svg"
    },
    {
        "company": "Facelt",
        "position": "Junior Backend Developer",
        "type": "Full Time",
        "location": "UK Only",
        "skills": ["Backend", "Junior", "Ruby", "RoR"],
        "img": "https://raw.githubusercontent.com/Priya44-bit/Job-Developer/682b1ba80230855146fe637a7a167bf2ce1b6abc/back10.svg"
    },
    {
        "company": "Shortly",
        "position": "Junior Backend Developer",
        "type": "Full Time",
        "location": "Worldwide",
        "skills": ["Frontend", "Junior", "HTML", "JavaScript", "Sass"],
        "img": "https://raw.githubusercontent.com/Priya44-bit/Job-Developer/682b1ba80230855146fe637a7a167bf2ce1b6abc/back11.svg"
    },
    {
        "company": "Insure",
        "position": "Junior Frontend Developer",
        "type": "Full Time",
        "location": "USA Only",
        "skills": ["Frontend", "Junior", "JavaScript", "Vue", "Sass"],
        "img": "https://raw.githubusercontent.com/Priya44-bit/Job-Developer/682b1ba80230855146fe637a7a167bf2ce1b6abc/back12.svg"
    },
    {
        "company": "Eyecam Co.",
        "position": "Full Stack Engineer",
        "type": "Full Time",
        "location": "Worldwide",
        "skills": ["Fullstack", "Midnight", "JavaScript", "Python", "Django"],
        "img": "https://raw.githubusercontent.com/Priya44-bit/Job-Developer/682b1ba80230855146fe637a7a167bf2ce1b6abc/back13.svg"
    },
    {
        "company": "The Air Filter Company",
        "position": "Front-end Developer",
        "type": "Part Time",
        "location": "Worldwide",
        "skills": ["Frontend", "Junior", "JavaScript", "React", "Sass"],
        "img": "https://raw.githubusercontent.com/Priya44-bit/Job-Developer/682b1ba80230855146fe637a7a167bf2ce1b6abc/back14.svg"
    }
]




let selectedFilters = [];
function renderJobs() {
    const jobListings = document.getElementById("job-listings");
    jobListings.innerHTML = ""; 
    
    const filteredJobs = jobs.filter(job => 
        selectedFilters.every(filter => job.skills.includes(filter))
    );
    
    filteredJobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";
        jobCard.innerHTML = `
            <img src="${job.img}" alt="${job.company} logo" class="company-logo">
            <div class="job-details">
                <h2>${job.company}</h2>
                <p>${job.position}</p>
                <p>${job.posted} ● ${job.type} ● ${job.location}</p>
                <div class="job-tags">
                    ${job.skills.map(skill => `<span class="job-tag">${skill}</span>`).join("")}
                </div>
            </div>
        `;
        jobListings.appendChild(jobCard);
        jobCard.querySelectorAll(".job-tag").forEach(tag => {
            tag.addEventListener("click", () => addFilter(tag.textContent));
        });
    });
}
function addFilter(filter) {
    if (!selectedFilters.includes(filter)) {
        selectedFilters.push(filter);
        renderFilters();
        renderJobs();
    }
}
function removeFilter(filter) {
    selectedFilters = selectedFilters.filter(f => f !== filter);
    renderFilters();
    renderJobs();
}
function renderFilters() {
    const filterBar = document.getElementById("filter-bar");
    filterBar.innerHTML = ""; 
    
    selectedFilters.forEach(filter => {
        const filterItem = document.createElement("div");
        filterItem.className = "filter-item";
        filterItem.innerHTML = `${filter} <span>×</span>`;
        filterItem.querySelector("span").addEventListener("click", () => removeFilter(filter));
        filterBar.appendChild(filterItem);
    });
}
renderJobs();