## 프로젝트 개요
React의 suspense, errorboundary, useTransition 등의 Concurrent 패턴을 데이터 전환이 찾은 포켓몬 도감을 구현해보며 익혀보려합니다.

## 프로젝트 목표

1. 외부 라이브러리 없이 상태 관리 구현
2. React의 Suspense와 ErrorBoundary 도입하여 Concurrent 패턴 이해

## 주요 기능
1. 포켓몬 데이터 페칭
    - PokeAPI를 사용하여 포켓몬 정보를 가져옵니다.
    - 버튼과 인풋을 통해 다른 포켓몬 정보로 넘어 갈 수 있습니다.

2. 상태 관리
    - 데이터 로딩 중에는 로딩 UI를 표시합니다.
    - 에러 발생 시 retry 기능을 제공합니다.

3. React Suspense & ErrorBoundary (wip)
    - 기존 상태 관리 로직을 Suspense로 전환하여 책임 분화.
    - ErrorBoundary로 에러 핸들링 책임을 컴포넌트에 위임.

## 기술 스택 및 구현 세부 사항
### 기술 스택
 - React 19, TS, Emotion, yarn berry 4

### 구현 세부 사항
**커스텀 훅**
- useFetchPokemonData
    1. 데이터를 가져오고 로딩 및 에러 상태를 관리합니다.
    2. retry 기능 테스트를 위해 20% 획률로 랜덤으로 에러를 반환합니다.
    3. 111번 포켓몬에 대해서는 항상 에러를 반환합니다. 

- usePokedex
    1. input 값을 관리합니다.
    2. 버튼의 disable 조건을 관리합니다.