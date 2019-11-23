const loginEnvio = function(){
    const postRequisicao = async (requisicao) => {
        if(!requisicao) return;
         
        const URL = `${baseURL}/requisicoes/`;
    
        try {
            const response = await axios.post(URL, requisicao, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    token: token,
                },
            });
            
            return (response.status === 201);
        } catch (error) {
            console.log('RequisicaoService/postRequisicao::', error);
        }
    }
    
}