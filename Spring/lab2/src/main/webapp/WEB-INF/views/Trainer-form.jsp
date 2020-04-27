<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Spring MVC 5 form-handling</title>

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
</h3>
<div class="panel panel-default">
<div class="panel-heading">
<br>
<div class="panel-title"><b><h4> Add Trainer </h4></b></div>

</div>
<div class="panel-body">
<form:form action="saveTrainer" class="form-horizontal" method="post" modelAttribute="trainer">
<form:hidden path="id"/>
<div class="form-group">
<label for="Name" class="col-md-3 control-label">Name</label>
<div class="col-md-5">
<form:input path="Name" class="form-control" />
</div>
</div>

<div class="form-group">
<label for="Domain" class="col-md-3 control-label">Domain</label>
<div class="col-md-5">
<form:input path="domain" class="form-control" />
</div>
</div>

<div class="form-group">
<label for="Location" class="col-md-3 control-label">Location</label>
<div class="col-md-5">
<form:input path="location" class="form-control" />
</div>
</div>

<div class="form-group">
<div class="col-md-offset-3 col-md-9">
<form:button class="btn btn-primary">Submit</form:button>
</div>
</div>
</form:form>
</div>
</div>
</div>

</div>
</body>
</html>