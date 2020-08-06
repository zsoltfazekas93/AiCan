from api.utils.globals import TRESHOLD_VALUE

import warnings
warnings.filterwarnings("error")


def treshold_checker(f, x):
    """Given a function (f) and a value (x)
       Return: "Number {} reached the treshold!"     f(x) => treshold_value, which is stored in globals.py
               "Number {} not reached the treshold!" f(x) < treshold_value, which is stored in globals.py
    """

    success_mess = "Number {} reached the treshold!".format(x)
    fail_mess = "Number {} not reached the treshold!".format(x)
    domain_fail = "Number {} not in domain {}".format(x,f.__name__) 

    try:
        mess = success_mess if f(float(x)) >= TRESHOLD_VALUE else fail_mess
    except RuntimeWarning:
        return domain_fail

    return mess