import React from 'react'
import img from './Logo.png'
import img2 from './logo2.jpg'
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Print = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const { person } = location.state || {}; 
  const navigate = useNavigate(); //
 

  var opt = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };

 // const element =document.querySelector('#print')
   
    // html2pdf(element,{
    //   margin:20,
    //   filename: person.nameeng
    // },
    // opt)
  
    const printpdf = async () => {
      try {
          // Prepare the data to be sent, assuming you want to toggle the attendance as an example.
          const newAttendance = person.attendance === 1 ? 0 : 1;
  
          // Send the request to update attendance with the data and Authorization header
          await axios.post(
              `${import.meta.env.VITE_API_BASE_URL}admin/attendance/${person.id}`,
              { attendance: newAttendance },  // Send the updated attendance data
              {
                  headers: {
                      Authorization: `Bearer ${token}`  // Include the Bearer token in the request headers
                  }
              }
          );
  



          
          // Once the request is successful, trigger the print dialog
          window.print();
          navigate('/assemblynah/search');
          // This will open the print dialog for the page
  
      } catch (error) {
          console.error('Error updating attendance and printing:', error);
      }
  };
  return (
  <div id='print'  className=''>
        <div >
            <div className='' >
                  <div className='flex  justify-between'>
                      <img src={img} className="object-contain w-40"  alt="" />
                      <img  src={img2}className="object-contain w-40 " alt=''/>
                  </div>
                <div className='flex'>
                  <div className=' w-full '>
                      <div className=" w-full  my-3 flex">
                      <button className=' print:hidden px-5 py-1  text-white hover:text-black bg-custom-yellow rounded hover:bg-amber-500'
                      onClick={ printpdf} data-html2canvas-ignore
                      >print</button>
                        <p className='ml-auto'>ID NO :&nbsp;&nbsp;&nbsp; <span className="underline">{person.shareholderid}</span><br />ኅዳር 5 ቀን 2017 ዓ.ም.</p>
                     
                      </div>
                
                          <h1 className='font-bold text-xl my-3 mx-auto' >እ.ኤ.አ. የ2023/2024 በጀት ዓመት የትርፍ ድርሻን (Dividend) ድልድል ማሳወቂያ</h1>
                         
                          <div className="flex text-base  items-center">
                                <span className="  ">የባለአክሲዮኑ ስም፡</span>
                                <span className="flex-1 border-b-2 border-black text-center">
                                {person.nameamh}/{person.nameeng}
                                </span>
                          </div>
{/* 
                          <p>ሀ. የተፈረመ አክሲዮን   ________________________</p>
                          <p>ለ. የተከፈለ አክሲዮን   _________________________</p> */}

                          <div className='  text-left '>
                          {/* ሀ. የተፈረመ አክሲዮን  		_________________________<br />
                          ለ. የተከፈለ አክሲዮን  		_________________________<br />
                          ሐ. ያልተከፈለ ቀሪ ገንዘብ 	_________________________<br />
                          መ. የትርፍ ድርሻ (ከታክስ በፊት) _________________________ */}
                           
                          <div className=' w-3/4 text-base items-center  pb-4  m-auto'>
                          <div className="flex  py-2 items-center">
                                <span className="  flex-1"></span>
                                <span className="flex-1 py-2 text-center">
                                በብር
                                </span>
                              </div>
                              <div className="flex py-2 items-center">
                                <span className="  flex-1">ሀ. የተፈረመ አክሲዮን:</span>
                                <span className="flex-1 border-b-2 border-black text-center">
                                {Intl.NumberFormat('en-US').format(person.totalcapital)}
                                </span>
                              </div>
                              <div className="flex py-2 items-center">
                                <span className="  flex-1">ለ. የተከፈለ አክሲዮን:</span>
                                <span className="flex-1 border-b-2 border-black text-center">
                                  {Intl.NumberFormat('en-US').format(person.paidcapital)}
                                </span>
                              </div>
                              <div className="flex py-2 items-center">
                                <span className="  flex-1">ሐ. ያልተከፈለ ቀሪ ገንዘብ:</span>
                                <span className="flex-1 border-b-2 border-black text-center">
                                  {Intl.NumberFormat('en-US').format(person.totalcapital - person.paidcapital)}
                                </span>
                              </div>
                              <div className="flex py-2 items-center">
                                <span className="  flex-1">መ. የትርፍ ድርሻ (ከታክስ በፊት):</span>
                                <span className="flex-1 border-b-2 border-black text-center">
                                  {Intl.NumberFormat('en-US').format(person.devidend)}
                                </span>
                              </div>
                          </div>
            

                          </div>


                          <div className=' text-left text-sm'>
                            
                          <h1 className='font-bold '>ማሳሰቢያ፣</h1> <br />
                        
  
                            <p className="mb-4">1ኛ/ 	<span className="ml-2"></span>የትርፍ ድርሻ ክፍፍሉ ተግባራዊ የሚሆነው የባንኩ ጠቅላላ ጉባዔ ከተከናወነ እና በትርፍ ክፍፍሉ ላይ ውሳኔ ከተሰጠ በኋላ እንደሆነ በትህትና እናሳውቃለን፡፡
                            </p>
                            <p className="mb-4">2ኛ/  <span className="ml-2"></span>	በ14ኛው የባለአክሲዮኖች አስቸኳይ ጠቅላላ ጉባዔ ውሳኔ መሠረት ባለአክሲዮኑ አዲስ አክሲዮን ለመግዛት የፈረሟቸውና ዋጋቸው በሙሉ ካልተከፈለ፤ ለባለአክስዮኑ የሚደርሰው ትርፍ ድርሻ/ዲቪደንድ/ ዋጋቸው ላልተከፈሉ ቀሪ የተፈረሙ አክሲዮኖች ክፍያ የሚውል ይሆናል፡፡  </p>
                            <p className="mb-4">
                            3ኛ/ <span className="ml-2"></span> የባንክ ሥራ አዋጅን ለማሻሻል በወጣው አዋጅ ቁጥር 1159/2019 መሠረት ማንኛውም ባለአክሲዮን የትርፍ ድርሻው የሚከፈለው ወይም ላለበት ላልተከፈለ ቀሪ የአክሲዮን ክፍያ እንዲውል የሚደረገው ባለአክሲዮኑ ኢትዮጵያዊ ዜግነት ወይም ትውልደ ኢትዮጵያዊ መሆናቸውን የሚገልጽ የታደሰ መታወቂያ (የቀበሌ መታወቂያ፤ መንጃ ፈቃድ፤ ፓስፓርት ወይም ሌላ መረጃ)፣ ድርጅቶች ከሆኑ የድርጅቱ ባለአክሲዮኖች በሙሉ ኢትዮጵያዊ ዜግነት ወይም ትውልደ ኢትዮጵያውያን መሆናቸውን የሚያረጋግጥ የመመሥረቻ ጽሑፍ ወይም ሌላ ተቀባይነት ያለው ማስረጃ ዋናውን ከኮፒ ጋር በመያዝ በባንኩ ዋናው መ/ቤት አክስዮን እና ኢንቨስትመንት ክፍል በአካል በመቅረብ የተዘጋጀውን ፎርም ሞልቶ ሲፈርም መሆኑን በትህትና እናሳውቃለን፡፡
                            </p>
                          </div>
                  </div>



             
                </div>
              <div className='flex justify-end p-1'>
              <div class="flex items-center justify-center w-12 h-12 border-2 border-black rounded-full">
                   <p class="text-lg">{person.id}</p>
                </div>
              </div>
            </div>


    
        </div>
  </div>
  )
}

export default Print
