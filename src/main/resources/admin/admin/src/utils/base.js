const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootmts92/",
            name: "springbootmts92",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootmts92/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电影评论网站系统"
        } 
    }
}
export default base
