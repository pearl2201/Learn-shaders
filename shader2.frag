//Shader lesson 3: Algorithmic drawing
// Test texture
#ifdef GL_ES
precision mediump float;
#endif
#define PI 3.1415926535
#define HALF_PI 1.57079632679

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// plot a line on y using a value between 0 to 1.0
float plot(vec2 st, float pct)
{
    return smoothstep(pct - 0.01, pct, st.y) - smoothstep(pct, pct + 0.01, st.y);

}

void drawALine()
{
    vec2 st = gl_FragCoord.xy/u_resolution;
   // float y = st.x;
   float y = 0.0;

   if (st.x + fract(u_time) < 1.0)
   {
      y = sin(2.0*PI*(st.x+fract(u_time)));

   }else

   {
        y = sin(2.0*PI*(st.x+fract(u_time)-1.0) );
   }
    
    vec3 color = vec3(y);
    float pct = plot(st,y);
    color = (1.0-pct)*color + pct*vec3(0.0,1.0,0.0);
    gl_FragColor = vec4(color,1.0);
}
void main()
{
   drawALine();
}