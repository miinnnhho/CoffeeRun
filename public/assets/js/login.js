document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('id');
    const passwordInput = document.getElementById('pw');
  
    window.handleLoginSubmit = function(event) {
      event.preventDefault();
  
      //이메일, 비밀번호 입력란 값 가져오기
      const email = emailInput.value;
      const password = passwordInput.value;
  
      // 이메일, 비밀번호 값 =>객체로 묶어 loginData에 저장
      const loginData = {
        email: email,
        password: password
      };
  

      axios
        .post('', loginData) //백엔드 API 주소 추가하기
        .then(function (response) {
          // 성공
          if (response.status === 200) {
            // 토큰 -> 로컬 스토리지에 저장
            localStorage.setItem('myToken', response.data.token);
            // 랜딩 페이지로 이동
            window.location.href = '/landingpage';
          }
        })
        .catch(function (error) {
          // 로그인 실패
          console.error('로그인 실패:', error.message);
        });
    }
  });
  