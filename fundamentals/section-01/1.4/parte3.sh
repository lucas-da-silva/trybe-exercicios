1- Liste todos os processos;

ps

2- Agora use o comando sleep 30 & ;

sleep 30 &

3- Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução;

ps
kill 33370

4- Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;

sleep 30
ctrl + z
bg

5- Crie um processo em background que rode o comando sleep por 300 segundos.

sleep 300 &

6- Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.

sleep 200
ctrl + z
sleep 100 
ctrl + z

7- Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.

jobs
kill %1

8- Retome a execução do processo sleep 100 em background com o comando bg.

bg % 3

9- Termine a execução de todos os processos sleep (mate os processos).

kill %2
kill %3