describe('The Home Page', () => {
    it('login', () => {
        cy.visit('http://localhost:8080/login.html')
        // 输入账号密码
        cy.get('.account').type('admin')
        cy.get('.password').type('admin')

        cy.get('button').click()  
        // 重定向到 /index
        cy.url().should('include', 'http://localhost:8080/index.html')

        // 断言UI页面是包含 'Hello World!' 文本
        cy.get('body').should('contain', 'Hello World!')
    })
})