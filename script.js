document.addEventListener('DOMContentLoaded', () => {
    const sealButton = document.getElementById('sealButton');
    const invitation = document.getElementById('invitation');

    sealButton.addEventListener('click', () => {
        invitation.classList.add('is-open');
    });

    const insideContent = document.querySelector('.inside-content');
    insideContent.addEventListener('click', (e) => {
        if (invitation.classList.contains('is-open')) {
            invitation.classList.remove('is-open');
        }
    });
});
