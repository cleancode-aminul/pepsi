document.getElementById('start-loading').addEventListener('click', () => {
    document.getElementById('loading-spinner').classList.remove('hidden');
});

document.getElementById('stop-loading').addEventListener('click', () => {
    document.getElementById('loading-spinner').classList.add('hidden');
});
