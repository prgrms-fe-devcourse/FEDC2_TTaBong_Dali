# 프롱이님! 따봉 드릴게요 - TTaBong

### 달리팀 프로젝트 TTaBong[따봉] : 칭찬감사 SNS 어플리케이션

[따봉 앱 배포 링크](https://ttabong.netlify.app/)

[팀 노션 바로가기](https://www.notion.so/1-fc8ac9e026554b90987146a396b3698e)

<br>

## 프로젝트 소개

`따봉`은 사용자 간 칭찬 포스트를 공유하는 SNS 어플리케이션입니다.

- 사용자는 다른 사용자에게 칭찬 및 감사를 전달하기 위해`따봉`을보낼 수 있습니다.
- 특정한 한 명의 사용자에게는 더 큰 칭찬 및 감사를 전달하기 위해 `빅따봉`을 보낼 수 있습니다.
- 사용자는 다른 사용자 간의 칭찬 및 감사 포스트에 댓글을 달거나 공감을 함으로써 상호작용할 수 있습니다.
- 사용자가 칭찬을 한 횟수를 따봉으로, 칭찬을 받은 횟수를 코인으로 계산하여 랭킹 시스템을 제공합니다.

<br>

## 팀원 소개


| [이우제](https://github.com/woojerry) | [이지은](https://github.com/MayOwall) | [정종관(팀장)](https://github.com/devBuzz142) | [민상기](https://github.com/Steadystudy) | [엄윤성](https://github.com/blacktoast) |
| --- | --- | --- | --- | --- |
| <img src='https://user-images.githubusercontent.com/97934878/176350925-9cf2289f-3500-4914-9038-23736ff25d7b.png' width='150' />  | <img src='https://user-images.githubusercontent.com/97934878/176350864-9ceaf830-36b3-4383-acc9-bc1e2de4bde7.png' width='150' />  | <img src='https://user-images.githubusercontent.com/97934878/176351807-7934715a-17c7-4efd-84d1-713c45af5794.png' width='150' />  | <img src='https://user-images.githubusercontent.com/97934878/176350735-e41793a0-c656-466c-9ec2-7e3f674b059b.png' width='150' />  | <img src='https://user-images.githubusercontent.com/97934878/176350691-e2293a98-896c-46b1-adee-6288e08173d0.png' width='150' />  |

<br>

## 📃 Doc

[Git Convention](https://www.notion.so/Git-Convention-e1527ffc72324d7a9dbeeceb68791396)

<br>

## 프로젝트 구조

### 각 컴포넌트 구조

Ex)

┣ 📂Avatar<br>
 ┣ 📜index.jsx<br>
 ┣ 📜index.stories.jsx<br>
 ┗ 📜style.jsx<br>

각 컴포넌트 이름으로 폴더 생성

이후 아래에 `index.jsx`, `stories.jsx`, `style.jsx` 파일을 생성함으로써 각 컴포넌트를 구성

- `index.jsx` : Component UI및 로직
- `stories.jsx` : storybook file
- `style.jsx` : emotion/styled Component

<br>

## 디렉토리 구조

### 📂Apis

 Api 코드 

### 📂assets

- svg, png 등 이미지 파일을 보관

### 📂commons

- `GlobalStyle` , `themes`
- `constants`

### 📂components

- 웹앱 전반적으로 재사용되는 base 컴포넌트

### 📂feature

- 도메인 관련 컴포넌트

### 📂hooks

- 커스텀훅들을 저장

### 📂pages

- 웹앱의 각 페이지를 담당하는 컴포넌트

### 📂routes

- `ProtectedRoute` : 로그인 하지 않았을 경우 접근 불가능한 Route
- `AuthRoute` : 로그인 상태 시 접근 불가능한 Route

### 📂utils

- 재사용되는 로직(hook이 들어가지 않은)

### 전체 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜ReadMe.md
 ┃ ┣ 📜api.js
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜channels.js
 ┃ ┣ 📜comments.js
 ┃ ┣ 📜follow.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜like.js
 ┃ ┣ 📜messages.js
 ┃ ┣ 📜notifications.js
 ┃ ┣ 📜posts.js
 ┃ ┣ 📜search.js
 ┃ ┣ 📜settings.js
 ┃ ┗ 📜users.js
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┣ 📂images
 ┣ 📂commons
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜apis.js
 ┃ ┃ ┣ 📜error.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜routes.js
 ┃ ┃ ┗ 📜string.js
 ┃ ┗ 📂style
 ┃ ┃ ┣ 📜GlobalStyle.jsx
 ┃ ┃ ┗ 📜themes.js
 ┣ 📂components
 ┃ ┣ 📂Avatar
 ┃ ┣ 📂AvatarBorder
 ┃ ┣ 📂Badge
 ┃ ┣ 📂BaseCardContainer
 ┃ ┣ 📂Button
 ┃ ┣ 📂Divider
 ┃ ┣ 📂Icon
 ┃ ┣ 📂Image
 ┃ ┣ 📂ImageUploadContainer
 ┃ ┣ 📂InputForm
 ┃ ┣ 📂Label
 ┃ ┣ 📂Logo
 ┃ ┣ 📂Modal
 ┃ ┣ 📂Spinner
 ┃ ┣ 📂Tab
 ┃ ┣ 📂Toast
 ┃ ┗ 📂UserInfoItem
 ┣ 📂contexts
 ┃ ┣ 📜ChannelProvider.jsx
 ┃ ┗ 📜UserProvider.jsx
 ┣ 📂feature
 ┃ ┣ 📂alarm
 ┃ ┃ ┣ 📂AlarmItem
 ┃ ┃ ┗ 📂AlarmSection
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂LoginForm
 ┃ ┃ ┗ 📂RegisterForm
 ┃ ┣ 📂cards
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┣ 📂CardDetail
 ┃ ┃ ┣ 📂Comment
 ┃ ┃ ┣ 📂CommentList
 ┃ ┃ ┣ 📂LabelList
 ┃ ┃ ┣ 📂MainCard
 ┃ ┃ ┣ 📂ProfileCard
 ┃ ┃ ┗ 📂TTaBongerAndTTaBonged
 ┃ ┣ 📂pageTemplate
 ┃ ┃ ┣ 📂Banner
 ┃ ┃ ┣ 📂BottomBar
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┗ 📂PageTemplate
 ┃ ┣ 📂profile
 ┃ ┃ ┗ 📂ProfileEditForm
 ┃ ┣ 📂rank
 ┃ ┃ ┗ 📂RankFirstInfo
 ┃ ┗ 📂ttabong
 ┃ ┃ ┣ 📂CheckIcon
 ┃ ┃ ┣ 📂LabelList
 ┃ ┃ ┣ 📂ReasonContainer
 ┃ ┃ ┣ 📂TTaBongModal
 ┃ ┃ ┗ 📜index.js
 ┣ 📂hooks
 ┃ ┣ 📜useForm.js
 ┃ ┣ 📜useRafState.js
 ┃ ┣ 📜useScroll.js
 ┃ ┣ 📜useScrollDown.js
 ┃ ┗ 📜useTimeOut.js
 ┣ 📂pages
 ┃ ┣ 📂AlarmPage
 ┃ ┣ 📂CardDetailPage
 ┃ ┣ 📂LoginPage
 ┃ ┣ 📂MainFeedPage
 ┃ ┣ 📂NotFoundPage
 ┃ ┣ 📂ProfileEditPage
 ┃ ┣ 📂RankPage
 ┃ ┣ 📂RegisterPage
 ┃ ┣ 📂SearchPage
 ┃ ┣ 📂TTaBongPage
 ┃ ┣ 📂UserProfilePage
 ┃ ┗ 📜index.js
 ┣ 📂routes
 ┃ ┣ 📜AuthRoute.jsx
 ┃ ┣ 📜ProtectedRoute.jsx
 ┃ ┗ 📜index.js
 ┣ 📂utils
 ┃ ┣ 📜cookies.js
 ┃ ┣ 📜getDayString.js
 ┃ ┣ 📜getHexToRgb.js
 ┃ ┗ 📜getPxToRem.js
 ┣ 📜App.jsx
 ┣ 📜App.test.js
 ┣ 📜index.jsx
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

<br>

## 활용 기술
|||
|---|---|
|언어|JavaScript ES6+|
|라이브러리|React, react-router-dom, adios, emotion|
|디자인/UI|Figma, Storybook|
|협업도구|Git, Slack, Discord, Notion|


<br>

## 순서도

<img src='https://user-images.githubusercontent.com/97934878/176352062-eacf4b6b-3a29-4072-9167-1e113fb29d1c.png' width='500' />


[피그마 링크](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5PlRlkHD1viN6R0JVksUMs%2F%3Fnode-id%3D545%253A117)

<br>

## 데모 화면

- 메인피드 페이지
    
    ![image](https://user-images.githubusercontent.com/97934878/176352323-f484b40d-e292-4a7a-9eba-4615f8a188bc.gif)
    
- 카드디테일 페이지
    
    ![image](https://user-images.githubusercontent.com/97934878/176352353-868772a7-51ad-403f-95e9-ee012c87bd46.gif)
    
- 랭크 페이지
    
    ![image](https://user-images.githubusercontent.com/97934878/176352386-400e40b8-9772-46e7-939a-99cabd447a7d.gif)
    
- 따봉 페이지
    
    ![image](https://user-images.githubusercontent.com/97934878/176352472-26580398-b102-4ee1-8c38-1bd331552ea2.png)
    
- 검색 페이지
    
    ![image](https://user-images.githubusercontent.com/97934878/176352517-e0b6f483-6ff4-4c2b-a63e-3046d7715325.png)
    
- 유저프로필 페이지
    
    ![image](https://user-images.githubusercontent.com/97934878/176352605-a0667aa1-d34b-4d36-905b-345b2a0da7ef.png)
    
- 로그인 페이지
    
    ![image](https://user-images.githubusercontent.com/97934878/176352728-fd1be4d8-21b7-4b6e-9df3-731be3a1502b.png)
