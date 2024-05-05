using AventusSharp.Data.Manager;
using AventusSharp.WebSocket;
using AventusSharp.WebSocket.Attributes;
using Tutorial.Data;
using Tutorial.Logic.DM;

namespace Tutorial.Websocket.Route
{
    [EndPoint<Core.Websocket.MainEndPoint>]
    public class TodoRoute : StorableWsRoute<Todo>
    {
        protected override IGenericDM<Todo>? GetDM()
        {
            return TodoDM.GetInstance();
        }
    }
}