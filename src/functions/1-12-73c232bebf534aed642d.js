import { app, InvocationContext } from "@azure/functions";
import * as https from "https";
import * as df from 'durable-functions';
import { ActivityHandler, OrchestrationContext, OrchestrationHandler } from 'durable-functions';

CODIFO2020

export async function serviceBusQueueTrigger(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    const client = df.getClient(context);
    const instanceId: string = await client.startNew("1-12-73c232bebf534aed642d", message);
    context.log(`Started orchestration with ID = '${instanceId}'.`);
}
app.serviceBusQueue('1-12-73c232bebf534aed642d', {
    connection: 'AAAA',
    queueName: '1-12-73c232bebf534aed642d',
    handler: serviceBusQueueTrigger,
    extraInputs: [df.input.durableClient()],
});