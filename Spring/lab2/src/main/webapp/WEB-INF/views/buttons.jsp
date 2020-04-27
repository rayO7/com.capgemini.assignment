<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="jumbotron-box" align="center">
<h2>Trainer Operations</h2>

<form class="form-vetical" action="addTrainer" method="get">
<input type="submit" name="add" value="Add Trainer">
</form>

<br><br>

<form class="form-vetical" action="deleteTrainer" method="get">
<input type="submit" name="delete" value="Delete Trainer">
</form>

<br><br>
<form class="form-vetical" action="">
<input type="button" name="modify" value="Modify Trainer">
</form>
<br><br>
<form class="form-vetical" action="">
<input type="button" name="displayId" value="Diplay by ID Trainer">
</form>
<br><br>
<form class="form-vetical" action="">
<input type="button" name="displayAll" value="Display All Trainers">
</form>



</div>
</body>
</html>