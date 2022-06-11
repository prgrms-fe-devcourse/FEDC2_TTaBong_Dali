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

messages
- [x] 나의 메시지함 (소통한 유저 목록) : getConversations
이거 솔직히 굳이 쓸 이유를 모르겠습니다. 
Conversation과 Message 모델의 다른점은 'updtaetdAt' 필드가 있냐 없냐 차이인데... 솔직히 필드 1개 차이면
그냥 updatedAt 필드가 있는 Messages를 가져오는 것이 낫지 않나 생각합니다.
- [x] 특정 사용자와 소통한 메시지 목록 : getMessages
A(token), B(userId) 사이의 메세지를 모두 가져옵니다.
그런데 A, B가 같은 인물이라면 (A에 curUser.token, B에 curUser._id 넣으면), 그냥 curUser의 모든 메세지를 가져옵니다.
사실상 getConversations 인데, updatedAt 필드를 포함해서 가져오기때문에 더 유용합니다..
- [x] 특정 사용자에게 메시지 전송 : postMessages
dm type 메세지 일단 구현하긴 했음. 그런데 일단 한동안은 TTaBong, BigTTaBong type만 사용할 예정
- [] : putMessageSeen
나중에 dm기능 제대로 만들고 나서 해도 상관없을듯