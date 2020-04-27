

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class SBU {
	
	private int sbuCode;
	private String sbuName;
	private String sbuHead;
	private static List<Employee> empList=new ArrayList<Employee>();
	
	
	public int getSbuCode() {
		return sbuCode;
	}
	public void setSbuCode(int sbuCode) {
		this.sbuCode = sbuCode;
	}
	public String getSbuName() {
		return sbuName;
	}
	public void setSbuName(String sbuName) {
		this.sbuName = sbuName;
	}
	public String getSbuHead() {
		return sbuHead;
	}
	public void setSbuHead(String sbuHead) {
		this.sbuHead = sbuHead;
	}
	public static List<Employee> getEmpList() {
		return empList;
	}
	public static void setEmpList(Employee emp) {
		empList.add(emp);
	}
	
	public void displayInfo()
	{
		DataSetter.setData();
		
		Iterator it=empList.iterator();
		int i=1;
		while(it.hasNext())
		{
			Employee emp=(Employee)it.next();
			System.out.println("Empoyee "+i+" Detail: ");
			System.out.println("NAME: "+emp.getName());
			System.out.println("ID: "+emp.getId());
			i++;
		}
	}
	
	public void empDisplay(int id)
	{
		DataSetter.setData();
		
		Iterator it=empList.iterator();
		while(it.hasNext())
		{
			Employee emp=(Employee)it.next();
			if(id==emp.getId())
			{
			System.out.println("Empoyee Deatails");
			System.out.println("NAME: "+emp.getName());
			System.out.println("ID: "+emp.getId());
			}
		}
	}
	}


