**1 新建Java项目**

**2 添加Wev Application框架**

&emsp;&emsp;**Add Framework Support...** - JavaEE - Web Application(4.0) - OK

**3 部署 Tomcat 服务器**

&emsp;&emsp;Run | **Edit Configurations...**

$(1)$ Add New Configuration - Tomcat Server - Local

$(2)$ Server - Application Server - Configure

&emsp;&emsp;Deployment - Add - **Artifact...** - OK

$(3)$ Run 'Tomcat'

**4 添加 Tomcat 库**

&emsp;&emsp;File | **Project Structure...** (Ctrl+Shift+Alt+S)

&emsp;&emsp;Project Settings - Modules - Dependencies - Add - **2 Library** - Tomcat - Add Selected - 选中 - OK

**5 添加 Servlet 模板**

&emsp;&emsp;File | Settings | Editor | **File and Code Templates** (Ctrl+Alt+S)

$(1)$ Other - Web - Java code templates - **Servlet Class.java**

$(2)$ Files - Create Template - OK

&emsp;&emsp;Name: Servlet

&emsp;&emsp;Template: Servlet Class.java

$(3)$ 新建 Servlet 文件。

&emsp;&emsp;JAVAEE TYPE: 不写 jakarta 其他随意。

&emsp;&emsp;Class Name: 随意。