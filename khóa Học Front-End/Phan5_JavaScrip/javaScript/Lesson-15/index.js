// var button = document.querySelector('button');
//   button.onclick = function() {
//      alert('Hello Word');
// }


//tinh điểm
		function tinhDiem(diemA, diemB, diemC)
			{
			
			
			let total = diemA*0.6 + diemB*0.3 + diemC*0.1
				
					
					if
				(
				diemA > 10 || diemA < 0 ||
				diemB > 10 || diemB < 0 ||
				diemC > 10 || diemC < 0
				)
				{
				
					document.writeln("Điểm không hợp lệ");
				}
				else 
				{
					
						if (total < 4)
					{
						document.writeln("<br>" +"F");
					}
					else if(total < 5)
					{
						document.writeln("<br>" +"D");
					}
					else if(total < 5.5)
					{
						document.writeln("<br>" +"D+");
					}
					else if(total < 6.5)
					{
						document.writeln("<br>" +"C");
					}
					else if(total < 7)
					{
						document.writeln("<br>" +"C+");
					}else if(total < 8)
					{
						document.writeln("<br>" +"B");
					}
					else if(total < 8.5)
					{
						document.writeln("<br>" +"B+");
					}
					else if(total < 9)
					{
						document.writeln("<br>" +"A");
					}
					else
					{
						document.writeln("<br>" +"A");
					}
			
      }
  }