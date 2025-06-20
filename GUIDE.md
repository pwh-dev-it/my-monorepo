# 개발 가이드

- 사용하시는 개발툴(IDE) 의 prettier 설정을 활성화 해주세요.
  - __저장 시 자동으로 정렬 체크__

----
- ESLint 설정을 활성화(수동옵션) 후 아래처럼 설정해주세요.
  - eslint package: `~/my-monorepo/node_modules/eslint`
  - eslint file: `~/my-monorepo/eslint.config.js`

----
- 개발 시 사용하는 패키지 매니저는 `yarn` 을 사용합니다.
----
- API 개발 시, `axios` 와 `@tanstack/react-query` __v5__ 를 사용합니다.
  - 샘플 구현 코드 확인해주세요.
----
- 상태관리는 `zustand` or `jotai` or `recoil` 를 사용합니다.
  - `redux` 사용은 지양합니다.
----
- 스타일 가이드는 `scss` 권장하나 자유롭게 사용하셔도 됩니다.
----
## root 경로에 패키지 설치 시 해결방법

- Running this command will add the dependency to the workspace root rather than the workspace itself, which might not be what you want - if you really meant it, make it explicit by running this command again with the -W flag

해당 Error 은 아래와 같은 옵션 추가로 해결할 수 있습니다.

```
yarn add <package-name> --ignore-workspace-root-check
```
or
```
yarn add <package-name> -W
```
