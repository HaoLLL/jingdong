<template>
  <div class="wrapper">
    <img class="wrapper-img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt="">
    <div class="wrapper-input">
      <input class="wrapper-input-content"
        type="text"
        v-model="username"
        placeholder="请输入用户名">
    </div>
    <div class="wrapper-input">
      <input class="wrapper-input-content"
        type="password"
        v-model="password"
        placeholder="请输入密码">
    </div>
    <div class="wrapper-login-button"
      @click="handleLogin">登录</div>
    <div class="wrapper-login-link"
      @click="handleRegisterClick">立即注册</div>
  </div>
  <Toast v-if="show"
    :message="toastMessage" />

</template>
<script>
import { useRouter } from 'vue-router'
// import axios from 'axios'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
// axios.defaults.headers.post['Content-Type'] = 'application/json'

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return {
    username,
    password,
    handleLogin
  }
}

export default {
  name: 'Login',
  components: {
    Toast
  },
  setup() {
    const router = useRouter()

    const { show, toastMessage, showToast } = useToastEffect()

    const { username, password, handleLogin } = useLoginEffect(showToast)

    const handleRegisterClick = () => {
      router.push({ name: 'Register' })
    }
    return {
      username,
      password,
      handleLogin,
      handleRegisterClick,
      show,
      toastMessage
    }
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  .wrapper-img {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
  }
  .wrapper-input {
    box-sizing: border-box;
    padding: 0 0.16rem;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    .wrapper-input-content {
      border: none;
      line-height: 0.48rem;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      .wrapper-input-content::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .wrapper-login-button {
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    color: #fff;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    border-radius: 4px;
    font-size: 0.16rem;
    line-height: 0.48rem;
    text-align: center;
  }
  .wrapper-login-link {
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-size: 0.14rem;
  }
}
</style>
