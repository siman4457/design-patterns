/**
 * STATE PATTERN
 * Notes:
 *
 * Pretty much the idea of using state to change the behavior of the program. Think of "const [state, setState] = useState()" in React.
 *
 * Easily confused with strategy pattern. State pattern can be considered an extension of the Strategy pattern since both patterns
 * are based on composition. They change the behavior of the context by delegating some work to helper objects.
 *
 * - State
 *      - States can be dependent as you can easily jump from one state to another.
 *      - States can be aware of all other states
 *      - really about doing different things based on the state, hence the results may vary
 * - Strategy
 *      - Strategies are completely independent and unaware of each other.
 *      - really about having different implementations that accomplish the same thing
 */
