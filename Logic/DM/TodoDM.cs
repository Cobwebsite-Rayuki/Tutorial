using System.Runtime.CompilerServices;
using AventusSharp.Data;
using AventusSharp.Data.Manager.DB;
using AventusSharp.Tools;
using Tutorial.Data;

namespace Tutorial.Logic.DM
{
    public enum TodoErrorCode
    {
        CommencePasMajuscule
    }
    public class TodoError : GenericError<TodoErrorCode>
    {
        public TodoError(TodoErrorCode code, string message, [CallerFilePath] string callerPath = "", [CallerLineNumber] int callerNo = 0) : base(code, message, callerPath, callerNo)
        {
        }

        public TodoError(TodoErrorCode code, Exception exception, [CallerFilePath] string callerPath = "", [CallerLineNumber] int callerNo = 0) : base(code, "", callerPath, callerNo)
        {
            Message = exception.Message;
        }
    }

    public class TodoDM : DatabaseDM<TodoDM, Todo>
    {
        protected override List<GenericError> BeforeCreateWithError<X>(List<X> values)
        {
            List<GenericError> result = base.BeforeCreateWithError(values);
            foreach (X value in values)
            {
                if (string.IsNullOrEmpty(value.Name) || !Char.IsUpper(value.Name[0]))
                {
                    TodoError error = new TodoError(TodoErrorCode.CommencePasMajuscule, "Le nom d'un todo doit commencer par une majuscule");
                    // On peut également fournir en détails de notre erreur le champs qui pose problème
                    // Cela peut être utile lorsqu'on créera un formulaire
                    error.Details.Add(new FieldErrorInfo("Name"));
                    result.Add(error);
                }
            }
            return result;
        }


         
    }
}