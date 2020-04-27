<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<%@ page isELIgnored="false" %>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
<div class="col-md-offset-2 col-md-12">
<h3 class="text-center text-blue">
Spring MVC 5 + Spring JPA 2 + JSP + MySql Example- Trainer Details
</h3><hr/><br>
<input type="button" value="Add Trainer" onclick="window.location.href='showForm'" class="btn btn-primary rounded" /><br>
<div class="panel panel-info">
<div class="panel-heading">
<span class="panel-title bg-dark text-white">
Trainer List
</span>
</div>
<div class="panel-body">
<table class="table table-stripped table-bordered rounded table-dark">
<tr>
<th>ID</th>
<th>Name</th>
<th>Domain</th>
<th>Location</th>
<th>DB Action</th>
</tr>

<c:forEach var="tempTrainer" items="${ trainers }">
<c:url var="updateLink" value="/Trainer/updateForm">
<c:param name="trainerId" value="${ tempTrainer.id }"></c:param>
</c:url>


<c:url var="deleteLink" value="/Trainer/delete">
<c:param name="trainerId" value="${ tempTrainer.id }"></c:param>
</c:url>

<tr>
<td>${tempTrainer.id}</td>
<td>${tempTrainer.name}</td>
<td>${tempTrainer.domain}</td>
<td>${tempTrainer.location}</td>

<td>

<a href="${ updateLink }">Update</a>
<a href="${ deleteLink }" onclick="if (!(confirm('Are you sure you want to delete this item?'))) return false">Delete</a>
</td>
</tr>
</c:forEach>


</table>

</div>


</div>
</div>
</div>
</body>
</html>