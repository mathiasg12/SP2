async function loginUser(url, errorCon, email, password) {
  try {
    const login = {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    };
    let response = await fetch(url, login);
    let responseJson = await response.json();
    if (response.status == 200) {
      errorCon.innerText =
        'Login to start biding or signup with a Free account';
      errorCon.classList.remove('text-danger');
      errorCon.classList.add('text-white');
      console.log(responseJson);
      if (responseJson.accessToken != undefined) {
        localStorage.setItem('Token', responseJson.accessToken);
        location.replace('profile.html');
      }
    } else {
      errorCon.innerText = responseJson.errors[0].message;
      errorCon.classList.remove('text-white');
      errorCon.classList.add('text-danger');
      errorCon.scrollIntoView({ behavior: 'smooth' });
    }
  } catch (error) {
    console.log(error);
  }
}
export { loginUser };
