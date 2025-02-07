const ID = Object.freeze({
  crewTabButton: 'crew-tab',
  teamTabButton: 'team-tab',
  frontendCourse: 'frontend-course',
  backendCourse: 'backend-course',
  crewNameInput: 'crew-name-input',
  addCrewButton: 'add-crew-button',
  crewTable: 'crew-table',
  courseSelect: 'course-select',
  missionSelect: 'mission-select',
  showTeamMatcherButton: 'show-team-matcher-button',
  teamMemberCountInput: 'team-member-count-input',
  matchTeamButton: 'match-team-button',
  teamMatchResult: 'team-match-result',
  rematchTeamButton: 'rematch-team-button',
  app: 'app',
  crewTableTbody: 'crew-table-tbody',
  matchTeamSection: 'match-team-section',
  showMatchedTeamSection: 'show-matched-team-section',
  courseSelectSection: 'course-select-section',
});

const CLASS = Object.freeze({
  deleteCrewButton: 'delete-crew-button',
  crewTabBox: 'crew-tab-box',
  teamTabBox: 'team-tab-box',
  tab: 'tab',
  show: 'show',
});

const COURSE = Object.freeze({
  course: 'course',
  frontend: 'frontend',
  frontendKor: '프론트엔드',
  backend: 'backend',
  backendKor: '백엔드',
});

const MISSION = Object.freeze({
  baseball: 'baseball',
  baseballKor: '숫자야구게임',
  racingCar: 'racingcar',
  racingCarKor: '자동차경주',
  lotto: 'lotto',
  lottoKor: '로또',
  shoppingCart: 'shopping-cart',
  shoppingCartKor: '장바구니',
  payments: 'payments',
  paymentsKor: '결제',
  subway: 'subway',
  subwayKor: '지하철노선도',
  performance: 'performance',
  performanceKor: '성능개선',
  deploy: 'deploy',
  deployKor: '배포',
});

const KEY = Object.freeze({
  localKey: 'teamMatchingData',
});

const MESSAGE = Object.freeze({
  confirmDeleteCrew: '해당 크루를 정말로 삭제하시겠습니까?',
  alertOfSameName: '동일한 이름이 존재합니다',
  alertOfLongName: '1글자 이상부터 5글자 이하의 이름을 입력해주세요.',
});

export { ID, CLASS, COURSE, MISSION, KEY, MESSAGE };
