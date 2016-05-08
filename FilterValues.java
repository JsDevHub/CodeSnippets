 
 import java.util.List;
 import java.util.ArrayList;
 import java.util.Set;
 import java.util.HashSet;

 
 
 class FilterValues{
	 
 
  public static Boolean getRecord(String key){
  
  //mock db data
  String[] data = {"45","78","20","46","88"};
  
  for(String str:data){
  
        if(str.equals(key))
		    return true;
         
  }
  return false;
  
  }
 
 
   
  public static void main(String[] arg){
	  
	  //mock request data
				  Set<String> requestData = new HashSet<String>();
				  requestData.add("78");
				  requestData.add("100");
				  requestData.add("98");
				  
				  
				  //filtered duplicate values List
				  List<String> duplicateValues = new ArrayList<String>();
				  
				  //loop for validation
				  for(String value:requestData){
				  
							  if(getRecord(value)){
								  duplicateValues.add(value);								  
							  }else{
								  
								  System.out.println(value+" - Successfully added to the data base ");
								  
							  }
							       
				  
				  }
				  
				  System.out.println(duplicateValues.toString());
  
	  
  }
				  
				  
 }