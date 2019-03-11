//const goToPokedex = document.querySelector('#intro');

const showQuizzScreen = () => {
    intro.style.display = 'none';
    discover.style.display = 'block';
};
document.getElementById('discoverPoke').addEventListener('click', showQuizzScreen);

const showResultSreen = () => {
    intro.style.display = 'none';
    discover.style.display = 'none';
    resultsPoke.style.display = 'block';
};
document.getElementById('discoverResults').addEventListener('click', showResultSreen);