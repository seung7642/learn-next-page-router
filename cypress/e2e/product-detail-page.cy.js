const ALERT_MESSAGE = '장바구니에 추가되었습니다.';

describe('상품 상세 페이지', () => {
  beforeEach(() => {
    cy.visit('/products/0');
  });

  // 첫 번째 테스트 시나리오
  it('상품 상세 페이지로 진입하면 상품의 이름, 가격, 이미지가 화면에 나타난다.', () => {
    // assertion (=then)
    cy.getByCy('product-image').should('be.visible');
    cy.getByCy('product-name').should('be.visible');
    cy.getByCy('product-price').should('be.visible');
  });

  // 두 번째 테스트 시나리오
  it('장바구니에 담기 버튼을 클릭하면 "장바구니에 추가되었습니다." alert 창이 나타난다.', () => {
    // prepare (=given)
    const stub = cy.stub();
    cy.on('window:alert', stub);

    // action (=when)
    cy.getByCy('cart-button')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(ALERT_MESSAGE);
      });
  });

  // 세 번째 테스트 시나리오
  it.only('장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다.', () => {
    // action (=when)
    cy.getByCy('cart-button').click();

    // assertion (=then)
    cy.url().should('include', '/cart');
  });
});
