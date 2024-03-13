<script setup lang="ts">

import { toggleDark } from "~/utils";
import {ref} from "vue";
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
const { y: scroll } = useWindowScroll();
function ClickSheZhi() {
  let SheZhiOff=document.getElementById('SheZhi')
  if (SheZhiOff.style.display=='block'){
    SheZhiOff.style.display='none'
  }else {
    SheZhiOff.style.display='block'
  }
}
function TuiChuClick(){
  let SheZhiOff=document.getElementById('SheZhi')
  sessionStorage.setItem('loginOff',false)
  SheZhiOff.style.display='none'
}
</script>

<template>
  <header class="header flex z-40 w-full top-0 left-0 relative h-70px">
    <scroll-btn
      name="i-ri-arrow-up-line"
      class="fixed right-3 bottom-3"
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    />

    <logo />

    <nav class="nav">
      <div class="spacer" />

      <div class="right print:op0">
        <RouterLink
          to="/blog?type=blog"
          :class="$route.name == 'blog' && 'op100!'"
        >
          <span class="lt-md:hidden">博客</span>
          <div class="i-carbon-book md:hidden"></div>
        </RouterLink>
        <RouterLink to="/travel" :class="$route.name == 'travel' && 'op100!'">
          <span class="lt-md:hidden">狐朋狗友</span>
          <div class="i-carbon-map md:hidden"></div>
        </RouterLink>
<!--        <RouterLink-->
<!--          to="/view/arr"-->
<!--          :class="$route.name == 'projects' && 'op100!'"-->
<!--        >-->
<!--          <span class="lt-md:hidden">项目</span>-->
<!--          <div-->
<!--            class="i-ant-design-fund-projection-screen-outlined md:hidden"-->
<!--          ></div>-->
<!--        </RouterLink>-->

<!--        <a-->
<!--          href="https://github.com/shellingfordly"-->
<!--          target="_blank"-->
<!--          title="GitHub"-->
<!--        >-->
<!--          <div class="i-uil-github-alt" />-->
<!--        </a>-->
        <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
          <div class="i-carbon-sun dark:i-carbon-moon" />
        </a>
        <a class="select-none"  title="Toggle Color Scheme">
          <div @click="ClickSheZhi()" class="i-el:cog w-1em h-1em"></div>
          <div id="SheZhi" class="SheZhiCaiDan">
            <div class="tuichu" @click="TuiChuClick()">退出登录</div>
          </div>
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.tuichu{
  width: 100%;
  text-align: center
}
.tuichu:hover{
  color: black;
}
.SheZhiCaiDan{
  width: 110px;
  height: 140px;
  background: white;
  position: absolute;
  top: 60px;
  right: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.42);
  display: none;
  padding: 10px;
}
.SheZhiCaiDan {
  -webkit-animation: SheZhiCaiDan 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: SheZhiCaiDan 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes SheZhiCaiDan {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes SheZhiCaiDan {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

.nav {
  padding: 0.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
