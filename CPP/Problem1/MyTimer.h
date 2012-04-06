#include <iostream>



void timeFunc (void (*pt2voidfunc)(void))
{
   timeval tp1;
   timeval tp2;
   int result1 = 0;
   int result2 = 0;

   result1 = gettimeofday(&tp1, NULL);
   pt2voidfunc();
   result2 = gettimeofday(&tp2, NULL);

   if (!result1 && !result2) {
      if (tp1.tv_sec != tp2.tv_sec) {
         std::cout << "Task took " << tp2.tv_sec - tp1.tv_sec << " seconds";
         std::cout << std::endl;
      } else {
         std::cout << "Task took " << tp2.tv_usec - tp1.tv_usec;
         std::cout << " microseconds" << std::endl;
      }
   }
}
