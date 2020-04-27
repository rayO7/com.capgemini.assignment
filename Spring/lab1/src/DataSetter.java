public class DataSetter {
	
	public static void setData()
	{
		Employee e1=new Employee();
		e1.setId(11);
		e1.setName("ray");
		SBU.setEmpList(e1);
		
		Employee e2=new Employee();
		e2.setId(12);
		e2.setName("rex");
		SBU.setEmpList(e2);
	}

}
