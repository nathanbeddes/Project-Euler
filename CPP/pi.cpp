#include <gmpxx.h>
#include <iostream>
#include <sstream>
#include <string>
#include <cmath>



using namespace std;



// This should be very slow
void Gregory_Leibniz (mpf_class& pi, int n)
{
   mpf_class piSum = 0;
   mpf_class numerator = 0;
   mpf_class denominator = 1;

   for (int i=0; i <= n; ++i) {
      numerator = pow(-1.0f, i);
      denominator = 2*i +1;
      piSum += (numerator/denominator);
   }

   pi = 4*piSum;
}



// This should be much faster
void Bailey_Borwein_Plouffe (mpf_class& pi, int n)
{
   mpf_class piSum = 0;
   mpf_class alpha = 16; // 16 so that when n = 0, alpha starts at 1.
   mpf_class beta = 0;
   mpf_class w, x, y, z;

   for (int i=0; i <=n; ++i) {
      alpha /= 16;
      w = 4; w /= (8*i + 1);
      x = 2; x /= (8*i + 4);
      y = 1; y /= (8*i + 5);
      z = 1; z /= (8*i + 6);
      beta = w - x - y - z;

      piSum += alpha*beta;
   }

   pi = piSum;
}



int main (int argc, char** argv)
{
   mpf_set_default_prec(1000);

   mpf_class pi;
   mp_exp_t exponent;
   string piString;
   int n = 0;
   int i;


   if (argc == 2) {
      istringstream* inp = new istringstream(argv[1]);
      *inp >> n;
   }

   for (i=0; i <= n; ++i) {
      Gregory_Leibniz(pi, i);
      piString = pi.get_str(exponent, 10, size_t(100));
      if (piString.length() > exponent) {
         piString.insert(int(exponent), ".");
      }
      cout << "Gregory_Leibniz(" << i << ") = \t\t" << piString << endl;
      Bailey_Borwein_Plouffe(pi, i);
      piString = pi.get_str(exponent, 10, size_t(100));
      if (piString.length() > exponent) {
         piString.insert(int(exponent), ".");
      }
      cout << "Bailey_Borwein_Plouffe(" << i << ") = \t" << piString << endl;
      cout << endl;
   }

   return 0;
}
