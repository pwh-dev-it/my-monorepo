# 개발 가이드

- 사용하시는 개발툴(IDE) 의 prettier 설정을 활성화 해주세요
  - 저장 시 자동으로 정렬 권장
- 사

## root 경로에 패키지 설치 시 해결방법

- Running this command will add the dependency to the workspace root rather than the workspace itself, which might not be what you want - if you really meant it, make it explicit by running this command again with the -W flag

해당 Error 은 아래와 같은 옵션 추가로 해결할 수 있습니다.

```
yarn add <package-name> --ignore-workspace-root-check
```
