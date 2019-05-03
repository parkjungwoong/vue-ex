# Vue frontend

> Vue + BootStrap Sample project

## 계획
1. Vue 개념 
2. 개발 환경 구성
3. 프로젝트 구성 요소
4. Vue 문법
5. Frontend 도구들

### Vue 개념
#### 키워드
1. View(화면단 개발)에 최적화
2. MVVM 패턴을 기반
3. Life Cycle
4. 템플릿
5. 단방향 데이터 바인딩
6. Virtual DOM(Document Object Model) 이용
7. 컴포넌트 기반으로 재사용성 높음
8. 브라우저 지원(익스9이상 지원)

**1.View(화면단 개발)에 최적화**

html과 로직이 분리되어 개발되기 때문에 화면단 개발에 최적화 되어있다고 말하는듯

**2.MVVM(Model-View-ViewModel) 패턴을 기반**

MVVM모델로 구현된 이유는 사용자 뷰와 로직을 완벽하게 분리할 수 있기 떄문\
~~MVC와 같은 패턴도 마찮가지인데 여기는 왜 MVVC모델을 채택했지?~~ : MVC는 View와 Model이 의존성을 갖기 때문\
View와 ViewModel간의 의존성이 없다.\
_Command패턴과 Data Binding 두가지 패턴을 이용함으로써 의존성이 없음_\
_Command패턴: 호출자와 수신자간의 의존성을 제거_

> MVVC패턴에 의한 전체적인 로직 흐름\
  View : 데이터 입력 & ViewModel에 값 전달\
  ViewModel : Model에 필요한 데이터 요청\
  Model : ViewModel에 필요한 데이터 전달\
  ViewModel : Model에서 받은 데이터 가공 & 변수에 저장\
  View : 데이터 바인딩으로 자동으로 값 갱신

View : html\
ViewModel : Vue 생성자 함수로 인스턴스 생성한 곳 (new Vue(...))\
Model : ???? 

**3.Life Cycle**

라이프사이클 훅 : Life Cycle 중 호출되는 함수이다.(다이어그램에서 빨간색으로 표기된 부분)

beforeCreate ~ created : 데이터 및 이벤트 초기화\
created ~ beforeMount : 뷰 생성\
mounted ~ updated : 데이터 바인딩, 데이터 변경 주시 및 뷰 업데이트\
destroyed : 자식 컴포넌트, 이벤트 리스너 해제

![Life Cycle](https://kr.vuejs.org/images/lifecycle.png)


**4.템플릿**

데이터 값을 html 템플릿에 맞춰 치환하는 작업\
Vue인스턴스 생성자에서 인자값으로 `el`, `template`으로 넘기는 값으로, Vue 생성시 데이터와 뷰 바인딩 처리를 위해 템블릿이 사용된다.\
Directives(지시자, v-로 시작하는)를 사용하여 좀 더 동적 처리가 가능하다 (v-if, v-bind 등등)

**5.단방향 데이터 바인딩**



**Virtual DOM(Document Object Model) 이용**\
DOM : 브라우저에서 HTML을 읽어들여서 구조화(node, property..) 후 메모리에 갖고 있는 데이터, 데이터가 구조화 되어 있기 때문에 html문서에 접근 할 수 있는 interface이기도 하다.\
_그래서 document.get*** 이런식으로 접근 가능하군_\
DOM의 트리 구조는 사용하기 쉽지만 HTML 구조가 복잡하거나 많아지면 조회, 수정이 느리다. (div 안에 div 안에 div ... 이런식이 많으면 트리가 복잡해짐)
어떤 노드가 수정되었을 경우 그 노드에 하위 노드까지 전부 변경이 이루어져 오버해드가 커진다.

가상 DOM : DOM의 추상화 개념으로 DOM의 복사본을 메모리 내에 저장하여 사용함\
변경 사항을 가상DOM에서 처리하고 실제 DOM의 변경을 최소화함으로써 DOM변경에 대한 성능 이슈를 완화해준다. 

**컴포넌트 기반으로 재사용성 높음**\
컴포넌트 : 독립적으로 동작하는 하나의 Vue인스턴스\
컴포넌트를 잘 활용하면 코드의 재사용성을 높일 수 있다.\
좀 더 자세히 보면 미리 정의된 옵션을 갖고 있는 Vue인스턴스로 예를 들면 List를 보여주는 List컴포넌트가 있다고 가정하면\
List컴포넌트에 보여줄 배열만 넘기면 해당 컴포넌트를 호출하는 뷰에서는 항ㅇ상 같은 기능과 디자인으로 List를 보여줄 수 있다.

**7. 브라우저 지원(익스9이상 지원)**\
Badel, Badel-polyfill, 등의 자바스크립트 컴파일 도구를 이용해서 호환성을 맞출 수 있다.(해당 설정을 해줘야한다.) 하지만 만능은 아니다\



## Build 세팅 방법

``` bash
# install dependencies

# bootstrap 추가
npm install --save bootstrap-vue

npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```

## 배경지식
1.npm
* 의존성 패키지 관리
* 빌드 스크립트 실행
  
2.babel
* ES6,7 로 작성된 코드를 ES5(일반 브라우저에서 인식 가능하도록 *.js 파일)로 변환해주는 도구


---
참고, 관련 글\
[MVVC패턴](https://magi82.github.io/android-mvc-mvp-mvvm/)\
[Common패턴](https://gmlwjd9405.github.io/2018/07/07/command-pattern.html)\
[Vue소개-한국어 공홈](https://kr.vuejs.org/v2/guide/)\
[Vue소개2](https://meetup.toast.com/posts/99)\
[Babel](https://medium.com/@ljs0705/babel-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-a1d0e6bd021a)\

