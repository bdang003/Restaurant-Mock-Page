const constructNav=(()=>{
  const navBar = document.createElement('div');
  navBar.innerHTML = 'navbar';
  navBar.id='nav-bar';
  document.body.append(navBar);
})();

const constructMain=(()=>{
  const main = document.createElement('main');
  const footer = document.createElement('div');
  main.innerHTML = 'main';
  main.id='main';
  footer.innerHTML = 'footer';
  footer.id='footer';
  document.body.append(main);
  main.append(footer);
})();