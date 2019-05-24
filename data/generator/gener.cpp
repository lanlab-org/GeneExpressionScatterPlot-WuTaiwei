//#include <bits/stdc++.h>
//using namespace std;
//const int MaxLengthOfText=8005;
//const int MaxLengthOfPattern=25;
//const int AlphabetSET = 20;
//int B[AlphabetSET];
//const size_t M_Of_P = 15;
//
//inline void showBits(const int &x){
//    cout<<bitset<M_Of_P>(x)<<endl;
//}
//
//inline int getAllOnes(const int &m){
//    return (1<<m)-1;
//}
//
//inline int getAllZeros(const int &m){
//    return 0;
//}
//inline int getMask(const int &pos){
//    return (1<<(pos-1));
//}
//
////remember to hash the p to int
//void Preprocessing(const char p[],const int &m,int &VP,int &VN,int &score){
//    for(int i=0;i<AlphabetSET;i++){
//        B[i]=getAllZeros(m);
//    }
//    for(int j=0;j<m;j++){
//        B[p[j]]=B[p[j]]|getMask(j);
//    }
//    VP=getAllOnes(m);
//    VN=getAllZeros(m);
//    score=m;
//}
//
//void Searching_Scoring_Output
//(const char p[],const int &m,const char t[],const int &n,
// int &VP,int &VN,int &HP,int &HN,int &D0,
// int &score,const int &k){
//    int X;
//    for(int pos=0;pos<n;pos++){
//        X=B[t[pos]]|VN;
//        D0=((VP+(X&VP))^VP)|X;
//        HN = VP&D0;
//        HP=VN|~(VP|D0);
//        X=HP<<1;
//        VN=X&D0;
//        VP=(HN<<1)|~(X|D0);
//
//        //scoring output
//        if((HP&getMask(m))!=getAllZeros(m)){
//            score++;
//        }else if((HN&getMask(m))!=getAllZeros(m)){
//            score--;
//        }else if((HP&getMask(m))==getAllZeros(m)){
//            score=score;
//        }
//        if(score<=k){
//            for(int i=pos-m+1;i<=pos;i++){
//                printf("%c",t[i]+'A');
//            }
//            printf("\n%d\n",pos);
//            //break;
//        }
//    }
//    cout<<"finished"<<endl;
//}
//
//int main(){
//    int VP=0,VN=0,HP=0,HN=0,D0=0;
//    int score=0;
//    int n=0,m=0,k=2;
//
//    char p[MaxLengthOfPattern]="DIFGBMORJAHMPLM";
//    char t[MaxLengthOfText]="";
//    ifstream fin("Text01.txt");
//    fin>>t;
//    m=strlen(p);
//    n=strlen(t);
//    for(int i=0;i<m;i++){
//        p[i]-='A';
//    }
//    for(int i=0;i<n;i++){
//        t[i]-='A';
//    }
//
//    //cout<<p<<endl;
//    Preprocessing(p,m,VP,VN,score);
//    Searching_Scoring_Output(p,m,t,n,VP,VN,HP,HN,D0,score,k);
//
//    return 0;
//}
