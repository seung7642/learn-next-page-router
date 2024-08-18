describe('상품 목록 페이지', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // 첫 번째 테스트 시나리오
  it('페이지에 진입하면 상품 목록이 표시된다.', () => {
    cy.getByCy('product-item').should('be.visible'); // 커스텀 커맨드를 사용했는데, TypeScript가 아니라 자동완성을 지원하지 않는다.
  });

  // 두 번째 테스트 시나리오
  it('네비게이션바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다.', () => {
    // 1. prepare (=given)

    // 2. action (=when)
    cy.get('[data-cy=cart-link]').click();

    // 3. assertion (=then)
    cy.url().should('include', '/cart');
    cy.get('[data-cy=cart-header]').should('be.visible');
  });

  // 세 번째 테스트 시나리오
  it('상품 목록에 있는 아이템을 클릭하면 상품 상세 페이지로 이동한다.', () => {
    // 1. prepare (=given)
    // cy.visit('/');

    // 2. action (=when)
    cy.getByCy('product-item').first().click();

    // 3. assertion (=then)
    cy.url().should('include', '/products/');
  });
});
