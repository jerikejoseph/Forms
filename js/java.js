a=[];
 while(true)
 {
    choice=prompt("[1] Add Task\n[2] Display task\n[3] Edit Task\n[4] Delete Task\n[5] Exit")
    if(choice==1)
        {
            o=prompt("Add Name")
            m=prompt("Ph.number")
            a.push({name:'o',number:'m'})
        }
        else if(choice==2)
        {
            str=" "
        for(i=0;i<a.length;i++)
        {  
            str+=`${i+1})${a[i]}\n`;
        }
        alert(str);
        }
        else if(choice==3)
            {

                NO=prompt("enter the number for replace")
                J=prompt("enter for update")
                a[NO-1]=J
            }
            else if(choice==4)
                {
                   k=prompt("enter the value for delete")
                   a.splice(k-1,1)
                }
        else if(choice==5)
        {
           break;
        }
        else{
            alert("invalid");
        }
 }