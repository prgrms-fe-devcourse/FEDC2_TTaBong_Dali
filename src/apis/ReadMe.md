auth
- [x] 로그인 : logIn
- [x] 회원가입 : signUp
- [] 로그아웃 : logOut : 무엇을 요청하는 API인지 모르겠음 추후 구현 예정
- [] 인증 확인 / getAuthUser : 정확히 뭘 하는 API인지 모르겠음

channels
- [x] 모든 채널 : getAllChannels
- [x] 특정 채널 : getSpecificChannel
우리 프로젝트에선 채널을 하나만 사용함.
일단 Test채널만 가져오도록 fetchTestChannel 로 처리하였음.

users
- [x] 사용자 목록 : getAllUsers
offset, limit 값 변경해서 가능, otherUsers로 출력함 (curUser는 빼고)
- [x] 접속 중 사용자 목록 : getOnlineUsers
api는 잘 작동하는데, 지금 온라인에 대한 정확한 정의가 아직 없어서 나중에 다시 봐야함
- [x] 사용자 정보 : getSpecificUsers
user의 _id 값을 통해 불러온다.
여기선 otherUsers 버튼 중에 클릭할 경우 정보를 불러오고 해당 user를 receiver로 setReceiver 하도록 하였음.
- [] 프로필 이미지 변경 : 추후 구현 예정
- [] 커버 이미지 변경  : 추후 구현 예정

