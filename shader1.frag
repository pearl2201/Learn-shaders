// Author: Patricio Gonzalez Vivo
#ifdef GL_ES
precision mediump float;
#endif
#define PI 3.1415926535
#define HALF_PI 1.57079632679

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_tex0; // data/moon.jpg
uniform vec2 u_tex0Resolution; 


vec4 func1(sampler2D _tex, vec2 _uv)
{
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    color = texture2D(_tex,_uv);
    return color;
   
}

void main()
{
     vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    
    // color = func1(u_tex0,uv);
     vec4 color = texture2D(u_tex0,uv);
     color = func1(u_tex0,uv);
 
     gl_FragColor = color;
}
