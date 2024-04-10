// JavaScript for handling page redirection based on conditions

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const nextPage = this.dataset.nextPage;
            const text = this.innerText.toLowerCase();
            
            // Check conditions based on page and button text
            if (nextPage && nextPage !== '' && nextPage !== undefined) {
                if (nextPage === 'page2.html' && text.includes('vedikas')) {
                    window.location.href = nextPage;
                } else if (nextPage === 'page3.html' && text.includes('pushups')) {
                    window.location.href = nextPage;
                } else if (nextPage === 'page4.html' && text.includes('yes')) {
                    window.location.href = nextPage;
                } else if (nextPage === 'final.html') {
                    window.location.href = nextPage;
                }
            }
        });
    });
});
