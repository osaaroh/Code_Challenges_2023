function simpleArraySum(ar) {
    let m_array = ar.reduce((a,b)=>{
        return a + b
    }, 0)
    
    console.log(m_array)
    return m_array
}
