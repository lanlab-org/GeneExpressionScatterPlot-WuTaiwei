#include <bits/stdc++.h>
#include <chrono>
#include <random>
using namespace std;
const int maxn = 100000;
const int maxm = 4;
uniform_int_distribution<> u(100000000, 300000000);
default_random_engine e(time(0));
inline double generand(){return (u(e)/100000000.0);}
inline int randInt(int border){return u(e)%border;}

mt19937 MTrnd(std::chrono::steady_clock::now().time_since_epoch().count());

typedef tuple<int,int,int> TIII;
TIII a[355];

int dis(const TIII &x,const TIII &y){
    return abs(get<0>(x)-get<0>(y))
          +abs(get<1>(x)-get<1>(y))
          +abs(get<2>(x)-get<2>(y));
}

int sum(TIII &x){
    return get<0>(x)+get<1>(x)+get<2>(x);
}

int maxDiv(TIII &x){
    int _1=get<0>(x);
    int _2=get<1>(x);
    int _3=get<2>(x);
    return max(abs(_1-_2),max(abs(_1-_3),abs(_2-_3)));
}

bool cmp(const TIII &x,const TIII &y){
    return randInt(15)>7;
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);

    string filename = "ColorSet.json";

    ofstream fout(filename);
    fout<<"["<<endl;

    int i=0,j=0,cnt=0,bound=200;
    //for(int j,i=0;i<256*256*256;i+=178577){
    while(cnt<=300){
        //i=(i+155557+randInt(155557))%16777216;
        i=randInt(16777216);
        //cout<<i<<endl;

        TIII tmp=(TIII){i%256,i/256%256,i/256/256%256};
        if(sum(tmp)<333)continue;
        if(sum(tmp)>777)continue;
        if(maxDiv(tmp)<15)continue;
        for(j=0;j<cnt;j++){
            if(dis(a[j],tmp)<bound)break;
        }
        if(j<cnt)continue;
        else cout<<"\r getting..."<<j,a[cnt++]=tmp;
        bound=max(bound-randInt(10),0);
    }
    shuffle(a,a+cnt,MTrnd);
    for(int i=0;i<cnt;i++){
        fout<<R"("#)"<<hex<<setw(2)<<setfill('0')<<get<0>(a[i])
                          <<setw(2)<<setfill('0')<<get<1>(a[i])
                          <<setw(2)<<setfill('0')<<get<2>(a[i])<<R"(")";
        if(i<cnt-1)fout<<",";
    }
    fout<<"]"<<endl;
    fout.close();


    filename = "ColorSet.html";
    fout.open(filename);
    fout<<R"(
    <!doctype html>
        <html>
        <head>
        <meta charset="utf-8">
        <title>colorSet</title>
        </head>

        <body>
            <table width="100%" border="1" cellspacing="0" cellpadding="0">
                <tbody>
    )"<<endl;
    for(int i=0;i<cnt;i++)
        fout<<R"(<tr><td bgcolor="#)"<<hex
        <<setw(2)<<setfill('0')<<get<0>(a[i])
        <<setw(2)<<setfill('0')<<get<1>(a[i])
        <<setw(2)<<setfill('0')<<get<2>(a[i])<<R"(">)"
        <<dec<<get<0>(a[i])<<","<<get<1>(a[i])<<","<<get<2>(a[i])<<R"(&nbsp;</td></tr>)"<<endl;

    fout<<R"(
                </tbody>
            </table>
        </body>
        </html>
    )"<<endl;
    fout.close();

    return 0;
}










