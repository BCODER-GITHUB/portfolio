window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    function numberToWords(num) {
        const words = [
            "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
            "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
            "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four",
            "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty",
            "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six",
            "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three",
            "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty"
        ];
        if (num <= 50) {
            return words[num];
        }
        return num;
    }

    function calculateExperience(joinDate) {
        const join = new Date(joinDate);
        const today = new Date();

        let years = today.getFullYear() - join.getFullYear();
        const m = today.getMonth() - join.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < join.getDate())) {
            years--;
        }

        return years;
    }

    const joinDate = "2020-06-23";
    const experience = calculateExperience(joinDate);
    const experienceInWords = numberToWords(experience);
    document.getElementById("join_year").textContent = experienceInWords;


});