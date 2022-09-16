import boto3 
import json

client = boto3.client('dynamodb')
TableName = 'cloudResumeCounter'

def lambda_handler(event, context):

    resp = client.update_item(
        TableName='cloudResumeCounter',
        Key={
            'stat': {'S': 'viewCount'}
        },
        UpdateExpression='ADD quantity :q',
        ExpressionAttributeValues={":q": {"N": "1"}},
        ReturnValues='UPDATED_NEW'
    )

    value = resp['Attributes']['quantity']['N']
    print(resp['Attributes'])
    print("UpdateItem succeeded:")
    # print(json.dumps(resp, indent=4))

    return(value)
