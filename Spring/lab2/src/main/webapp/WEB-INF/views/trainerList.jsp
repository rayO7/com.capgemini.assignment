<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="container" align="center">
<h2>Trainer Table</h2>
<table class="table">
<tr>
<th>ID</th>
<th>Name</th>
<th>Domain</th>
<th>Location</th>
</tr>
<tr>
<c:forEach var="tempTrainer" items="${ trainers }">
<tr>
<td>${tempTrainer.id}</td>
<td>${tempTrainer.name}</td>
<td>${tempTrainer.domain}</td>
<td>${tempTrainer.location}</td>
</tr>
</c:forEach>
</table>
</div>
</body>
</html>