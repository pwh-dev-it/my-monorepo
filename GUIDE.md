# 개발 가이드

- 개발툴(IDE) prettier 설정을 활성화(수동옵션) 해주세요.
  - prettier package: `~/my-monorepo/node_modules/prettier`
  - prettier file: `~/my-monorepo/prettier.config.js`

----
- 개발툴(IDE) ESLint 설정을 활성화(수동옵션) 후 아래처럼 설정해주세요.
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
- 기본 유틸 함수 라이브러리는 `es-toolkit` 을 사용합니다.(공통으로 추가되어 있습니다.)
  - `lodash` 사용은 지양합니다.
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

## root 경로에 설치한 패키지를 하위 패키지에서 사용하고 싶을 때(중복설치 방지)
- root 경로에 설치한 패키지를 하위 모노레포 package.json 에 추가시 컴파일 에러 발생할 수 있습니다.
- 하위 모노레포 경로에 동일패키지를 강제 설치하지 마시고 아래처럼 설정하시면 됩니다.
- 하위 모노레포 `tsconfig.json` 파일에 아래처럼 설정해주세요.
```json5
// apps/website-a/tsconfig.json
{
  // ... 기존 설정
  "compilerOptions": {
    // ... 기존 설정
    "paths": {
      // root 경로에 설치한 패키지 경로를 지정합니다.(예시, es-toolkit)
      "es-toolkit": ["node_modules/es-toolkit"]
    }
  },
}
```

### 개발 시, 어드민, 대고객 `axios` 인스턴스는 분리해서 사용해주세요
